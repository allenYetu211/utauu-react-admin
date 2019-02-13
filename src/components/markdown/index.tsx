import * as React from 'react';
import * as codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
// todo 修改编辑器样式
// todo 编辑栏目菜单

export default class MarkDownComponent extends React.Component < any,
any > {
  // private quill:any;

  public componentDidMount() {
    console.log('codemirror', codemirror)
    const dom = document.getElementById("editor");
    // @ts-ignore
    codemirror.fromTextArea(dom, Object.assign({
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
      // 自动高亮所有选中单词
      // styleSelectedText: true,
      // highlightSelectionMatches: { showToken: /w/, annotateScrollbar: true },
      // 展开折叠
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      // 回车键自动补全上一步格式
      extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList'
      }
    }));
  }

  public getContents = () => {
  }

  public render() {
    return (
      <div>
        <button onClick={this.getContents}>
        检查
      </button>

      <textarea id="editor"/>
      </div>

    )
  }
}