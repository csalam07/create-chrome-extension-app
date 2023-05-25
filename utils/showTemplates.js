import path from 'path';
// import { readFile } from 'fs/promises';
import inquirer from 'inquirer';
import { generate } from './generate.js';

const selectTemplateQuestion = [
	{
		type: 'list',
		name: 'templateType',
		message: 'Select a template',
		choices: ['empty', 'color picker', 'ipl feeds']
	}
];

const showTemplates = name => {
	inquirer.prompt(selectTemplateQuestion).then(answers => {
		const ans = answers.templateType;
		if (ans === 'empty') {
			generate(name, ans);
		} else if (ans === 'color picker') {
			generate(name, ans);
		} else if (ans === 'ipl feeds') {
			generate(name, ans);
		} else {
			console.log('something went wrong');
		}
	});
};

export default showTemplates;
