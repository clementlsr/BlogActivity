import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogActivity';
  posts = [
    {
      title: 'myFirstPost',
      content: 'Discovering the moon was a fantastic experience grandma. I hope next year you will come with us ! '+
                  'Kisses Brian'
    },
    {
      title: 'Second blog post (wouhou)',
      content: 'This banana bread is awesome, here is the recipe : [...]'
    },
    {
      title: 'Third (and last) Post',
      content: 'Tomorrow I will be leaving all this blog definitely to devote myself to fruits coloring'
    }
  ];

}
