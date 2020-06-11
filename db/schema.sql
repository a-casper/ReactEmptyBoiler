drop database if exists todos;

create database todos;
use todos;

create table (
  id int not null auto_increment primary key,
  task varchar(255) not null
)