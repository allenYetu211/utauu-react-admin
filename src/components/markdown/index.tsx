import * as React from 'react';
import * as codemirror from 'codemirror'
import * as marked from 'marked';
import 'codemirror/lib/codemirror.css';
import * as style from './style/style.scss';



// todo 修改编辑器样式
// todo 编辑栏目菜单

interface IState {
  textareaValue : string;
  markedHtml : any;
}
export default class MarkDownComponent extends React.Component < any,
IState > {
  private codemirror : any;
  private marked : any;

  constructor(props : any) {
    super(props);
    this.state = {
      textareaValue: '',
      markedHtml: ''
    }
  }

  public componentDidMount() {
    this.initMarked();
    this.initCodemirror();
  }

  public initMarked = () => {
    this.marked = marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  public initCodemirror = () => {
    const {textareaValue} = this.state
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

    this.codemirror.on('change', (cm:any) => {
      const content = cm.getValue();
      console.log('content:::', content)
      if (content !== textareaValue) {
        this.setState({
          textareaValue: content,
          markedHtml: this.marked(content)
        })
      }
    });
  }

  public render() {
    const {markedHtml} = this.state
    return (
      <div className={style.markdownEditor}>
        <div>
          <textarea  id="editor"/>
        </div>

        <div className="markedHtml">
          <div dangerouslySetInnerHTML={{
            __html: markedHtml
          }}/>
        </div>
      </div>

    )
  }
}