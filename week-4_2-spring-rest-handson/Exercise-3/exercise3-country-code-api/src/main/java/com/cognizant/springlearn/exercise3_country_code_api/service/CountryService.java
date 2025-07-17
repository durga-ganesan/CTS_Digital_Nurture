package com.cognizant.springlearn.exercise3_country_code_api.service;

import com.cognizant.springlearn.exercise3_country_code_api.model.Country;
import com.cognizant.springlearn.exercise3_country_code_api.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private ApplicationContext context;

    public Country getCountry(String code) {
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country Not Found"));
    }
}
