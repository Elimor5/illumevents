# Schema Information

## users
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| username        | string     | not null, indexed, unique  
| email           | string     | not null, indexed, unique
| password_digest | string     | not null
| session_token   | string     | not null, indexed, unique

## bookmarks
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| user_id         | integer    | not null, foreign key (references users), indexed
| event_id        | integer    | not null, foreign key (references events), indexed

## events
| column name       | data type  | details  
|-------------------|------------|------------------------
| id                | integer    | not null, primary key
| host_id           | integer    | not null, foreign key (references users), indexed
| title             | string     | not null, indexed
| venue             | string     | not null
| address           | string     | not null
| city_state_zip    | string     | not null
| date              | date       | not null, indexed
| time              | time       | not null
| description       | text       |
| image_url         | string     | not null
| ticket_price      | integer    | not null, indexed
| ticket_quantity   | integer    | not null

## tickets
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| description     | string     | not null
| event_id        | integer    | not null, foreign key (references events), indexed
| user_id         | integer    | not null, foreign key (references users), indexed


## categories
| column name     | data type  | details  
|-----------------|------------|------------------------
| name            | string     | not null, unique

## event_categories (bridge column to connect categories to users)
| column name     | data type  | details  
|-----------------|------------|------------------------
| category_id     | integer    | not null, primary key
| event_id        | integer    | not null, foreign key (references event), indexed
| name            | string     | not null
  (event_id & category_id indexed together )
