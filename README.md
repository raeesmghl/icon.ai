

### start the project with CLI

As we are gonna use 'tailwind cli' your project should be a node project.

#### Run this command in the terminal

```
npm init
```

#### Now install tailwind as devDependency

```
npm install -D tailwindcss
```

#### Initialize tailwind / create a tailwind.config.js file

```
npx tailwindcss init
```


#### set the content path in tailwind.config.js

- create 2 folders with names 'src' and 'dist' and create a file 'input.css' in src folder and 2 files (index.html and style.css) in dist folder

- style.css or output.css is the file where all the css code for the utility classes (you will use in your project) is created.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```



#### Add the Tailwind directives to your CSS (input css file);

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```





#### start the Tailwind CLI build process

- now style.css contains all the styles you will use in your project (default css by tailwind)

```
npx tailwindcss -i ./src/input.css -o ./dist/style.css
```

#### connect style.css with index.html

``` CSS
<link rel="stylesheet" href="style.css">
```



