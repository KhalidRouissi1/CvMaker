package com.nextvision.cvmaker.role;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nextvision.cvmaker.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "roles")
@EntityListeners(AuditingEntityListener.class)
public class Role {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(unique = true)
    private String name;
    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    private List<User> users;
    @CreatedDate
    @Column(nullable = false,updatable = false)
    private LocalDate createdDate;
    @LastModifiedBy
    @Column(insertable = false)
    private LocalDate lastModifiedDate;

}
