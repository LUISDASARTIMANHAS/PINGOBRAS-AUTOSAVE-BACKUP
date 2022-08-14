CREATE DATABASE AMRAZEMDB

USE aulaBD;

create table Tbl_Cliente(
id_cliente int auto_increment not null primary key,
nome varchar(30),
telefone varchar(30),
debitos double);

insert into Tbl_Cliente (nome, telefone, debitos) VALUES ('Ana','12345678', '90.50');

select*from Tbl_Cliente WHERE nome = 'Ana';