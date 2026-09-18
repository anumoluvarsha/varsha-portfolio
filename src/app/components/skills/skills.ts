import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
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
        'Git',
        'Jira'
      ]
    },
    {
      title: 'Tools & Delivery',
      skills: [
        'Jenkins',
        'CI/CD',
        'AWS',
        'PostgreSQL',
        'DBeaver',
        'Liquibase'
      ]
    },
    {
      title: 'Additional Experience',
      skills: [
        'Flutter',
        'Dart',
        'Generative AI',
        'AI-Assisted Development'
      ]
    }
  ];

  exploring: string[] = [
    'Node.js',
    'Express',
    'React'
  ];
}