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
                  buildHookId: '5f2ec58e848de0e2fd493e60',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-aibrvzbx',
                  apiId: '22049955-84ad-4fbf-be08-a519bea4839b'
                },
                {
                  buildHookId: '5f2ec58ef5cc1f63f8ffde47',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9qu62moe',
                  apiId: '09336ffc-6386-4b3c-b604-c53276f001ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkarteaga/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9qu62moe.netlify.app', category: 'apps'}
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
