package com.cognizant.rest.controller;

import com.cognizant.rest.model.Country;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return List.of(
                new Country("IN", "India"),
                new Country("US", "United States"),
                new Country("JP", "Japan")
        );
    }

    @GetMapping("/countries/{code}")
    public ResponseEntity<Country> getCountryByCode(@PathVariable String code) {
        List<Country> countries = getAllCountries();
        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
