import { Plugin } from 'obsidian';
import {
  insertLineAbove,
  insertLineBelow,
  deleteSelectedLines,
  joinLines,
  duplicateLine,
  selectLine,
  transformCase,
  goToLineBoundary,
} from './actions';

export default class CodeEditorShortcuts extends Plugin {
  async onload() {
    console.log('Loading plugin: CodeEditorShortcuts');

    this.addCommand({
      id: 'insertLineAbove',
      name: 'Insert line above',
      hotkeys: [
        {
          modifiers: ['Mod', 'Shift'],
          key: 'Enter',
        },
      ],
      editorCallback: (editor) => insertLineAbove(editor),
    });

    this.addCommand({
      id: 'insertLineBelow',
      name: 'Insert line below',
      hotkeys: [
        {
          modifiers: ['Mod'],
          key: 'Enter',
        },
      ],
      editorCallback: (editor) => insertLineBelow(editor),
    });

    this.addCommand({
      id: 'deleteLine',
      name: 'Delete line',
      hotkeys: [
        {
          modifiers: ['Mod', 'Shift'],
          key: 'K',
        },
        {
          modifiers: ['Ctrl', 'Shift'],
          key: 'K',
        },
      ],
      editorCallback: (editor) => deleteSelectedLines(editor),
    });

    this.addCommand({
      id: 'joinLines',
      name: 'Join lines',
      hotkeys: [
        {
          modifiers: ['Mod'],
          key: 'J',
        },
      ],
      editorCallback: (editor) => joinLines(editor),
    });

    this.addCommand({
      id: 'duplicateLine',
      name: 'Duplicate line',
      hotkeys: [
        {
          modifiers: ['Mod', 'Shift'],
          key: 'D',
        },
      ],
      editorCallback: (editor) => duplicateLine(editor),
    });

    this.addCommand({
      id: 'selectLine',
      name: 'Select line',
      hotkeys: [
        {
          modifiers: ['Mod'],
          key: 'L',
        },
      ],
      editorCallback: (editor) => selectLine(editor),
    });

    this.addCommand({
      id: 'goToLineStart',
      name: 'Go to start of line',
      editorCallback: (editor) => goToLineBoundary(editor, 'start'),
    });

    this.addCommand({
      id: 'goToLineEnd',
      name: 'Go to end of line',
      editorCallback: (editor) => goToLineBoundary(editor, 'end'),
    });

    this.addCommand({
      id: 'transformToUppercase',
      name: 'Transform selection to uppercase',
      editorCallback: (editor) => transformCase(editor, 'upper'),
    });

    this.addCommand({
      id: 'transformToLowercase',
      name: 'Transform selection to lowercase',
      editorCallback: (editor) => transformCase(editor, 'lower'),
    });
  }

  onunload() {
    console.log('Unloading plugin: CodeEditorShortcuts');
  }
}
