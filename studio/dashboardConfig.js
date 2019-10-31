export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5dba770f3b23303f6bde9599',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-eCommerce-studio',
                  apiId: '5be3af4d-48fe-4d27-ac82-fdc2ff12623d'
                },
                {
                  buildHookId: '5dba770fd7dd3aba5a24706d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-eCommerce',
                  apiId: '7ad224b3-2e47-46a6-9fe3-e90fc99b2549'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Logeshdas/sanity-gatsby-eCommerce',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-eCommerce.netlify.com', category: 'apps'}
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
