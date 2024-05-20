package com.caRtera.demo.entity.User;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
@Setter
@Getter
public class User {
    @Id
    private String _id;
    private String nombre;

    private String apellido;

    private String celular;

    private String documento;

    private String contraseña;

}