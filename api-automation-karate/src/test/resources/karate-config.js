function fn() {
  var config = {
    baseUrl: 'https://serverest.dev'
  };

  karate.configure('report', {
    showLog: true,
    showAllSteps: true
  });

  return config;
}