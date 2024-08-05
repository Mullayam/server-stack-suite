"use client"
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { vscodeDark, vscodeLight, } from '@uiw/codemirror-theme-vscode';
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
const Language = [
    StreamLanguage.define(go),javascript({ jsx: true })
]
export function Editor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: React.SetStateAction<string>, viewUpdate: any) => {
    // console.log('val:', val);
    setValue(val);
  }, []);
  return <CodeMirror  theme={vscodeDark} value={value} height="600px" extensions={Language} onChange={onChange} />;
}