/**
 * @file: 
 * @module:  Markdown Component
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import * as codemirror from 'codemirror';
import * as marked from 'marked';
import * as style from './style/style.scss';
import * as cn from 'classnames';
import 'codemirror/lib/codemirror.css';
// @ts-ignore
import * as hljs from 'highlightjs';
import 'highlightjs/styles/ocean.css';


interface IProps {
  onChangeMarkedContent: (content: string) => void;
  content: string;
}
interface IState {
  textareaValue : string;
  markedHtml : any;
  viewMarked : boolean;
  fullScreen : boolean;
}

export default class MarkDownComponent extends React.Component < IProps,
IState > {
  private codemirror : any;
  private marked : any;

  constructor(props : any) {
    super(props);
    this.state = {
      textareaValue: '',
      markedHtml: '',
      viewMarked: false,
      fullScreen: false
    }
  }

  public componentDidMount() {
    this.initMarked();
    this.initCodemirror();
  }

  public componentWillReceiveProps(nextProps:IProps) {
    this.codemirror.setValue(nextProps.content)
    this.setState({
      textareaValue: nextProps.content,
      markedHtml: this.marked(nextProps.content)
    })
  }

  // 初始marked
  public initMarked = () => {
    this.marked = marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight(code, lang, callback) {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  public initCodemirror = () => {
    const dom = document.getElementById("editor");
    // @ts-ignore
    this.codemirror = codemirror.fromTextArea(dom, Object.assign({
      // 语言模式 github markdown扩展
      mode: 'gfm',
      // 行号
      lineNumbers: true,
      // 自动验证错误
      matchBrackets: true,
      // 是否换行
      lineWrapping: false,
      // 点击高亮正行
      styleActiveLine: true,
      // 配色
      theme: 'base16-dark',
      // 自动补全括号
      autoCloseBrackets: true,
      // 自动闭合标签
      autoCloseTags: true,
      // 自动高亮所有选中单词 styleSelectedText: true, highlightSelectionMatches: { showToken:
      // /w/, annotateScrollbar: true }, 展开折叠
      foldGutter: true,
      gutters: [
        'CodeMirror-linenumbers', 'CodeMirror-foldgutter'
      ],
      // 回车键自动补全上一步格式
      extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList'
      }
    }));

    this.bindScroll()

    this
      .codemirror
      .on('change', (cm : any) => {
        const content = cm.getValue();
        if (content !== this.state.textareaValue) {
          this.props.onChangeMarkedContent(content)
        }
      });

  }

  // 绑定滚动事件， 同步两侧位置
  public bindScroll() {
    const dom = document.querySelectorAll('.CodeMirror-scroll')[0]
    dom.addEventListener('scroll', (e : any) => {
      const {target} = e
      const marked : any = document.querySelector('#markedView');
      const occupy : any = (target.scrollTop / target.scrollHeight).toFixed(2)
      marked
        .parentElement
        .scroll({
          top: (marked.scrollHeight * occupy).toFixed(0),
          behavior: "smooth"
        })
    })
  }

  // 获取光标位置
  public getCursorLocation = () => {
    const location = this
      .codemirror
      .getCursor('start')
    const stat = this
      .codemirror
      .getTokenAt(location);
    console.log('stat:::', stat)
    return stat
  }

  // 替换内容
  public replaceSelection = () => {
    this
      .codemirror
      .setSelection('[', 'infor]')
  }

  // 插入连接
  public injectLink = () => {
    this
      .codemirror
      .replaceSelection('[](https://)')
  }

  // 插入图片
  public injectPicture = () => {
    this
      .codemirror
      .replaceSelection('![](https://)')
  }

  public viewMarked = () => {
    this.setState({
      viewMarked: !this.state.viewMarked
    })
  }

  public fullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
  }

  public render() {
    const {markedHtml, viewMarked, fullScreen} = this.state
    return (
      <div
        className={cn(style.markdownEditor, {
        [style.viewFullScreen]: fullScreen
      })}>

        <div className={style.markdownMenu}>
          <ul>
            <li>
              <button onClick={this.injectLink}>连接</button>
            </li>
            <li>
              <button onClick={this.injectPicture}>图片</button>
            </li>
            <li>
              <button onClick={this.viewMarked}>{viewMarked
                  ? '专注'
                  : '预览'
}</button>
            </li>
            <li>
              <button onClick={this.fullScreen}>
                {fullScreen
                  ? '细致'
                  : '全屏'
}
              </button>
            </li>
          </ul>
        </div>

        <div className={cn(style.markdownContainer)}>
          <div>
            <textarea id="editor"/>
          </div>

          <div
            className={cn(style.marked, {
            [style.show]: viewMarked
          })}>
            <div
              id="markedView"
              dangerouslySetInnerHTML={{
              __html: markedHtml
            }}/>
          </div>
        </div>

      </div>

    )
  }
}