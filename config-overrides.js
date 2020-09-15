const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 按需加载`antd`样式	https://ant.design/docs/react/use-with-create-react-app-cn
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  // 自定义主题	https://ant.design/docs/react/use-with-create-react-app-cn
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@font-size-base': '14px',
        '@primary-color': '#D41117',
        '@layout-header-background': 'rgba(248,248,248,1)',
      },
    },
  }),
);
