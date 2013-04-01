package com.qindel.webapp.modelo.servicio.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.qindel.webapp.modelo.entities.Libro;
import com.qindel.webapp.modelo.entities.LibroDao;
import com.qindel.webapp.modelo.entities.Pais;
import com.qindel.webapp.modelo.entities.PaisDao;
import com.qindel.webapp.modelo.dtos.LibroDto;
import com.qindel.webapp.modelo.dtos.PaisDto;
import com.qindel.webapp.modelo.servicio.Servicio;

/**
 * Esta clase se encarga de la implementación del servicio web.
 * @author richie
 *
 */
@Service ("servicioImpl")
public class ServicioImpl implements Servicio {

	private PaisDao paisDao;
	private LibroDao libroDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<PaisDto> findAllPaises() {
		List<Pais> paises = paisDao.findAll();
		List<PaisDto> paisesDto = new ArrayList<PaisDto>(paises.size());
		for (Pais pais : paises) {
			paisesDto.add(new PaisDto(pais.getIdPais(), pais.getNombrePais(), pais.getCodigoPais(), pais.getValorPais()));
		}
		return paisesDto;
	}

	@Override
	@Transactional(readOnly=true)
	public List<LibroDto> findAllLibros(){
		List<Libro> libros = libroDao.findAll();
		List<LibroDto> librosDto = new ArrayList<LibroDto>(libros.size());
		for(Libro libro : libros) {
			librosDto.add(new LibroDto(libro.getIdLibro(), libro.getTitulo(), libro.getAutor()));
		}
		return librosDto;
	}
	/**
	 * @return the paisDao
	 */
	public PaisDao getPaisDao() {
		return paisDao;
	}

	/**
	 * @param paisDao the paisDao to set
	 */
	public void setPaisDao(PaisDao paisDao) {
		this.paisDao = paisDao;
	}

	/**
	 * @return the libroDao
	 */
	public LibroDao getLibroDao() {
		return libroDao;
	}

	/**
	 * @param libroDao the libroDao to set
	 */
	public void setLibroDao(LibroDao libroDao) {
		this.libroDao = libroDao;
	}

}
