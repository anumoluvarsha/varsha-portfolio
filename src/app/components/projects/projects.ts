import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  contribution: string;
  focus: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      number: '01',
      title: 'VDesigner Low-Code Platform',
      type: 'Enterprise Product',
      description:
        'A drag-and-drop platform for building application screens and workflows from reusable, configurable components.',
      contribution:
        'Engineered 20+ reusable Angular UI components, workflows, validation frameworks, and customer-facing features. Supported code reviews, testing, quality analysis, and CI/CD workflows.',
      focus: [
        'Reusable component architecture',
        'Configurable workflows',
        'Frontend quality and delivery'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Angular Material',
        'SCSS',
        'REST APIs'
      ]
    },
    {
      number: '02',
      title: 'AI-Powered Application Generation',
      type: 'Generative AI',
      description:
        'A VDesigner workflow that turns natural-language requirements into application screens and workflows.',
      contribution:
        'Led AI-powered generation integration and implemented Claude LLM-assisted workflows with schema validation. Designed prompts, platform rules, and component metadata to produce renderable VDesigner JSON configurations.',
      focus: [
        'Claude LLM integration',
        'Prompt and platform rules',
        'Schema-validated output'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Claude LLM',
        'JSON Schema',
        'REST APIs'
      ]
    },
    {
      number: '03',
      title: 'DataOn Flutter Runtime',
      type: 'Cross-Platform',
      description:
        'A Flutter-based application runtime with reusable framework components and platform integrations.',
      contribution:
        'Built dynamic forms, file management, camera services, QR/barcode scanning, and Firebase Authentication integrations. Improved quality through debugging, refactoring, testing, and SonarQube analysis.',
      focus: [
        'Reusable Flutter components',
        'Device and platform services',
        'Runtime quality'
      ],
      technologies: [
        'Flutter',
        'Dart',
        'Firebase Authentication',
        'SonarQube'
      ]
    }
  ];
}
