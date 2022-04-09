# Star Wars

Star Wars is a React App that's consumes an external Star Wars' API.

## Installation

First, download the zip or clone this repository into your personal computer.

Use the package manager [yarn or npm] to install the dependencies.

```bash
yarn
```

After that, you can launch the application using the following command:

```
yarn dev
```

## How to use the app

On each page you can search for a specific character, movie, vehicle or spaceship. You can also save as a favorite to view in a different section.

## How the app works

![alt text](https://github.com/memof90/screenProjects/blob/master/Starwars/app-2.gif?raw=true)

 ## Screens Apps
 
 <table>
  <tr>
    <td>Contct List</td>
     <td>search Items</td>
     <td>Empty List</td>
  </tr>
  <tr>
    <td><img src="https://github.com/memof90/screenProjects/blob/master/Starwars/Captura%20de%20Pantalla%202022-04-09%20a%20la(s)%202.17.12%20p.%C2%A0m..png?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/memof90/screenProjects/blob/master/Starwars/Captura%20de%20Pantalla%202022-04-09%20a%20la(s)%202.17.20%20p.%C2%A0m..png?raw=true" width=270 height=480></td>
     <td><img src="https://github.com/memof90/screenProjects/blob/master/Starwars/Captura%20de%20Pantalla%202022-04-09%20a%20la(s)%202.17.32%20p.%C2%A0m..png?raw=true" width=270 height=480></td>
  </tr>
 </table>


## Pages

The app basically:

[x] "/": Home page (Characters);
[x] "/characters/:id": Specific character's page;
[x] "/films": Films' page;
[x] "/films/:id": Specific film's page;
[x] "/starships": Starships' page;
[x] "/starship/:id": Specific starship's page;
[x] "/vehicles": Vehicles' page;
[x] "/vehicles/:id": Specific vehicle page;


## What technologies does this project use?

The whole app was made with ReactJs. To style, it's uses styled-components.

Others importants libs was used also:

[x] React Redux (to save all favourites states)
[x] Axios (to make requests to API);
[x] Lottie (to make the animations with lottiefiles in JSON);
[x] Lodash (to make debounce);
[x] React Router DOM v6;
[x] Polished;
[x] React Icons.

## About the Api
All Data Provided By [SWAPI](https://swapi.dev/)

## Demo
[Star Wars](https://chimerical-parfait-270191.netlify.app)
