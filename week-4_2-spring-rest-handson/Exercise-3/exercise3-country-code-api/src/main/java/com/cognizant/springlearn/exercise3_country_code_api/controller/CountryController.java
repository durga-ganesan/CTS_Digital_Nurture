package com.cognizant.springlearn.exercise3_country_code_api.controller;

import com.cognizant.springlearn.exercise3_country_code_api.model.Country;
import com.cognizant.springlearn.exercise3_country_code_api.service.CountryService;
import com.cognizant.springlearn.exercise3_country_code_api.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        return countryService.getCountry(code);
    }
}
