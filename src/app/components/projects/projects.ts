import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  contribution: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects: Project[] = [
    {
      number: '01',
      title: 'Low-Code / No-Code Application Designer',
      type: 'Professional Work',
      description:
        'An enterprise application development platform that enables users to visually configure and build applications using reusable UI components.',
      contribution:
        'Developed and maintained Angular-based functionality, reusable components, complex configuration-driven workflows, API integrations, and frontend features across the application designer.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'SCSS',
        'Angular Material',
        'REST APIs'
      ]
    },
    {
      number: '02',
      title: 'AI-Powered Application Generation',
      type: 'Professional Work',
      description:
        'A Generative AI-assisted workflow that helps users create application configurations from natural-language requirements.',
      contribution:
        'Worked on the frontend integration for prompt-based application generation, including validation, conversational workflows, generated configuration handling, and integration with the existing application designer.',
      technologies: [
        'Angular',
        'TypeScript',
        'Generative AI',
        'REST APIs',
        'JSON'
      ]
    },
    {
      number: '03',
      title: 'Angular + Flutter Web Integration',
      type: 'Professional Work',
      description:
        'An Angular-based application shell designed to preload and embed a Flutter Web application to improve the perceived loading experience.',
      contribution:
        'Implemented the Angular and Flutter Web integration, handled remote Flutter build assets and application initialization, and worked through loading, CORS, asset resolution, and deployment challenges.',
      technologies: [
        'Angular',
        'Flutter Web',
        'TypeScript',
        'Dart',
        'CanvasKit',
        'Jenkins'
      ]
    }
  ];
}