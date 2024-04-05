package com.soltel.islantilla;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

import io.swagger.v3.oas.annotations.Hidden;

import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class IslantillaApplication {

    @Hidden
	@RequestMapping(value = "/inicio")
    public String index() {
        return "inicio";
    }
	
    @Hidden
	@RequestMapping(value = "/menu")
    public String menu() {
        return "<h1>Menu Principal</h1>";
    }
	
    @Hidden
	@RequestMapping(value = "/fin")
    public String fin() {
        return "<h1>Fin Aplicación</h1>";
    }
	
	public static void main(String[] args) {
		SpringApplication.run(IslantillaApplication.class, args);
	}

}
