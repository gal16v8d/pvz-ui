# PVZ-UI

This project was bootstrapped with [Vite](https://vitejs.dev/).
Basically, its a really basic UI wiki view for all the data related to Plants Vs Zombies PC game.
This is still an exploratory WIP, so it may get some data updates soon.
This UI consumes a python API (see pvz-svc repo) who currently is not alive, since I am checking to deploy the backend service either in Railway or Deta. But UI is alive through a flag that enable mocking using [MSW](https://mswjs.io/). It should be up, but if is not the case, feel free to ping.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run generate-api-model`

Generate all the models from swagger docs available in the backend services, it can be upgraded by calling the command again.

## Stay in touch

- Author - [gal16v8d](https://github.com/gal16v8d)

## License

[MIT licensed](LICENSE).

## List of cool technologies in use here

- [Msw](https://mswjs.io/)
- [MUI](https://mui.com/material-ui/)
- [React](https://reactjs.org/)
- [React-i18next](https://react.i18next.com/)
- [React-Query](https://tanstack.com/query/v4/docs/react/adapters/react-query)
- [Vite](https://vitejs.dev/)
