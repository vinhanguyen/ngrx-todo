# NgrxTodo

Todo list implemented using ngrx.

## Create angular project

```
ng new ngrx-todo
```

## Install store

```
ng add @ngrx/store
```

## Install effects

```
ng add @ngrx/effects --minimal
```

## Generate action

```
ng generate action TodoList --creators --group --api
```

## Generate reducer

```
ng generate reducer TodoList --creators --group --reducers reducers/index.ts --api false --spec false
```

## Generate effect

```
ng generate effect TodoList --creators --group --root --module app.module.ts --api false --spec false
```

## Start json server

```
json-server --watch ./src/app/todos.json
```