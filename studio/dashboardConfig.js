export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61b30f04c2eeb3d65714a73f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-64thivv8',
                  apiId: 'd042cb4b-509f-4adc-87b8-210e7d62573a'
                },
                {
                  buildHookId: '61b30f0507b89fdd122d315f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gsgvtcbx',
                  apiId: 'c354ceff-0f17-41f4-b407-13b9e4011283'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vtai99vt07/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gsgvtcbx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
