package com.cognizant.springweb;

import com.cognizant.springweb.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CountryXmlDemo {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        System.out.println(country);
    }
}
