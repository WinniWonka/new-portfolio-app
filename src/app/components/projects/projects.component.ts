import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  cinemaAppProject: Tools[] = [
    {
      name: 'Dart',
    },
    {
      name: 'HTML',
    }
  ];

  daestroClothProject: Tools[] = [
    {
      name: 'JavaScript',
    },
    {
      name: 'Express JS',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'Express JS',
    },
    {
      name: 'MongoDB',
    },
  ];

  pokedexAppProject: Tools[] = [
    {
      name: 'HTML',
    },
    {
      name: 'Dart',
    },
    {
      name: 'Swift',
    },
  ];

  mernProject: Tools[] = [
    {
      name: 'MongoDB',
    },
    {
      name: 'Express JS',
    },
    {
      name: 'React JS',
    },
    {
      name: 'Node JS',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
  ];

  rfmProject: Tools[] = [
    {
      name: 'Python',
    },
    {
      name: 'Streamlit',
    }
  ];

  cinemaWebProject: Tools[] = [
    {
      name: 'PHP',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Laravel',
    },
    {
      name: 'Tailwind CSS',
    },
    {
      name: 'XAMPP',
    }
  ];

  projectCinemaApp = () => {
    window.open(environment.projectCinemaApp, '_blank');
  };

  projectDaestroCloth = () => {
    window.open(environment.projectDaestroCloth, '_blank');
  };

  projectPokedexApp = () => {
    window.open(environment.projectPokedexApp, '_blank');
  };
  projectMern = () => {
    window.open(environment.projectMern, '_blank');
  };
  projectRfm = () => {
    window.open(environment.projectRfm, '_blank');
  };
  projectCinemaWeb = () => {
    window.open(environment.projectCinemaWeb, '_blank');
  };
}
