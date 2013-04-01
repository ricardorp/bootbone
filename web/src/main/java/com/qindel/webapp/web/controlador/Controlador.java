package com.qindel.webapp.web.controlador;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.qindel.webapp.modelo.dtos.LibroDto;
import com.qindel.webapp.modelo.dtos.PaisDto;
import com.qindel.webapp.modelo.servicio.Servicio;

@Controller("controlador")
public class Controlador {
	
	/**
	 * Logger.
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(Controlador.class);

	private Servicio servicio;

	@RequestMapping(value = "/index.html")
	public ModelAndView index() {
		LOGGER.debug("/index.html");
		ModelAndView modelAndView = new ModelAndView("/index.html");
		return modelAndView;
	}

	@RequestMapping(value = "/paises", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody List<PaisDto> findAllPaises() {
		LOGGER.debug("/paises");
		List<PaisDto> listaPaises = servicio.findAllPaises();
		LOGGER.debug(String.valueOf(listaPaises));
		return listaPaises;
	}

	@RequestMapping(value = "/libros", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody List<LibroDto> findAllLibros() {
		LOGGER.debug("/libros");
		List<LibroDto> listaLibros = servicio.findAllLibros();
		LOGGER.debug(String.valueOf(listaLibros));
		return listaLibros;
	}
	
	/**
	 * @return the servicio
	 */
	public Servicio getServicio() {
		return servicio;
	}

	/**
	 * @param servicio the servicio to set
	 */
	public void setServicio(Servicio servicio) {
		this.servicio = servicio;
	}
	
	
}
