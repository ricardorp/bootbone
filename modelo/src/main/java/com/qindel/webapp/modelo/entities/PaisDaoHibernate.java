package com.qindel.webapp.modelo.entities;

import java.util.List;

import com.qindel.webapp.modelo.common.db.HibernateDao;

public class PaisDaoHibernate extends HibernateDao implements PaisDao {

	@Override
	public Pais findPais(int idPais) {
		return (Pais)getSessionFactory().getCurrentSession().get(Pais.class, idPais);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Pais> findAll() {
		return (List<Pais>)getSessionFactory().getCurrentSession().createQuery("from Pais").list();
	}

}
