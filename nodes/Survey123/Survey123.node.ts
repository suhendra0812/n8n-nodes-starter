import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Survey123 implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Survey123',
		name: 'Survey123',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:survey123.png',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'ArcGIS Survey123 is a simple and intuitive form-centric data gathering solution that makes creating, sharing, and analyzing surveys possible in just three easy steps: 1) Ask Questions; 2) Get the Answers; 3) Make the best Decisions.',
		defaults: {
			name: 'Survey123',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'Survey123Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://survey123.arcgis.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Resources and operations will go here
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Watch Survey',
						value: 'watchSurvey',
					},
					{
						name: 'Create Report',
						value: 'createReport',
					},
				],
				default: 'watchSurvey',
			},
		],
	};
}
