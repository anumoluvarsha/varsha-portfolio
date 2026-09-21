import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [SectionHeader],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'RxJS',
        'HTML5',
        'CSS3',
        'SCSS'
      ]
    },
    {
      title: 'UI & Development',
      skills: [
        'Angular Material',
        'Bootstrap',
        'Responsive Design',
        'REST APIs',
        'Unit Testing',
        'SonarQube',
        'Git',
        'Jira'
      ]
    },
    {
      title: 'Tools & Delivery',
      skills: [
        'Jenkins',
        'CI/CD',
        'AWS RDS',
        'Amazon S3',
        'PostgreSQL',
        'Redis',
        'DBeaver',
        'Liquibase'
      ]
    },
    {
      title: 'Additional Experience',
      skills: [
        'Flutter',
        'Dart',
        'Claude LLM',
        'Prompt Engineering',
        'JSON Schema Validation'
      ]
    }
  ];

  exploring: string[] = [
    'Angular Architecture',
    'AI Guardrails',
    'Cross-Platform Development'
  ];
}