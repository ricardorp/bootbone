package com.qindel.webapp.modelo.entities;

import java.io.Serializable;

/**
 * Clase entity asociada a la tabla aplicacion_web.libro. Guarda toda la información relativa a un libro.
 * 
 * @author richie
 *
 */
public class Libro implements Serializable {

	private static final long serialVersionUID = 2568498457177254579L;
	/**
	 * Identificador del libro
	 */
	private int idLibro;
	/**
	 * Título del libro
	 */
	private String titulo;
	/**
	 * Autor del libro
	 */
	private String autor;

	/**
	 * Constructor por defecto.
	 */
	public Libro() {
		super();
	}

	/**
	 * Constructor que incializa todos los campos.
	 * 
	 * @param idLibro Identifcador del libro
	 * @param titulo Título del libro
	 * @param autor Autor del libro
	 */
	public Libro(int idLibro, String titulo, String autor) {
		super();
		this.idLibro = idLibro;
		this.titulo = titulo;
		this.autor = autor;
	}

	/**
	 * @return the idLibro
	 */
	public int getIdLibro() {
		return idLibro;
	}

	/**
	 * @param idLibro the idLibro to set
	 */
	public void setIdLibro(int idLibro) {
		this.idLibro = idLibro;
	}

	/**
	 * @return the titulo
	 */
	public String getTitulo() {
		return titulo;
	}

	/**
	 * @param titulo the titulo to set
	 */
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	/**
	 * @return the autor
	 */
	public String getAutor() {
		return autor;
	}

	/**
	 * @param autor the autor to set
	 */
	public void setAutor(String autor) {
		this.autor = autor;
	}

	/**
	 * Dos libros son el mismo si tienen el mismo identificador
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idLibro;
		return result;
	}

	/**
	 * Dos libros son el mismo si tienen el mismo identificador
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Libro))
			return false;
		Libro other = (Libro) obj;
		if (idLibro != other.idLibro)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Libro [idLibro=" + idLibro + ", titulo=" + titulo + ", autor="
				+ autor + "]";
	}
	
}
