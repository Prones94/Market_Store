import React from 'react'
import './Directory.styles.scss'

import MenuItem from '../MenuItem/MenuItem';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'monitors',
        imageUrl: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1vbml0b3JzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        size: 'small',
        id: 1
      },
      {
        title: 'lamps',
        imageUrl: 'https://images.unsplash.com/photo-1560074557-d54ddce534f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fG9mZmljZSUyMGxhbXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        id: 2,
      },
      {
        title: 'speakers',
        imageUrl: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMHNwZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        id: 3,
      },
      {
        title: 'storage',
        imageUrl: 'https://images.unsplash.com/photo-1515054458823-948dc294418d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMHN0b3JhZ2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        size: 'small',
        id: 4,
      },
      {
        title: 'chairs',
        imageUrl: 'https://images.unsplash.com/photo-1596079890775-20e5099dc924?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        id: 5,
      }
      ]
    }
  }

  render() {
    return (
      <div className="menu__directory">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory