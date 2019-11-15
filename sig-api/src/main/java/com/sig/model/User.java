package com.sig.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.sql.Date;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String lastName;
    private String firstName;
    private Date birthDate;
    private String tel;
    private String address;
    @Column(unique = true)
    private String email;
    @Size(min = 6, max = 16)
    private String password;
}
