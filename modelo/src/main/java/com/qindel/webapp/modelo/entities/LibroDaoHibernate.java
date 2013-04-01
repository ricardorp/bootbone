package com.qindel.webapp.modelo.entities;

import java.util.List;

import com.qindel.webapp.modelo.common.db.HibernateDao;

public class LibroDaoHibernate extends HibernateDao implements LibroDao {

	@Override
	public Libro findLibro(int idLibro) {
		return (Libro)getSessionFactory().getCurrentSession().get(Libro.class, idLibro);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Libro> findAll() {
		return (List<Libro>)getSessionFactory().getCurrentSession().createQuery("from Libro").list();
	}

}
