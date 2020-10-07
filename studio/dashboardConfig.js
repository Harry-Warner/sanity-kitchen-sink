export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e0caf14f5080f8cc27f40',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-icfj7br3',
                  apiId: '9e6a37b8-3e50-4222-9e6c-83c585661529'
                },
                {
                  buildHookId: '5f7e0cb014f5080bf1c280cd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6em3hhu2',
                  apiId: 'e4e53b29-bcae-4526-858a-b29fc2e13b46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Harry-Warner/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6em3hhu2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
