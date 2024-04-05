package com.soltel.isalantilla.dtos;

import java.time.LocalDate;

public class ReservaDTO {

	public int hab;
	public LocalDate entrada;
	public String nif;
	public float precio;
	public String rutaPdf;
	public String opciones;
	
	public int getHab() {
		return hab;
	}
	public void setHab(int hab) {
		this.hab = hab;
	}
	public LocalDate getEntrada() {
		return entrada;
	}
	public void setEntrada(LocalDate entrada) {
		this.entrada = entrada;
	}
	public String getNif() {
		return nif;
	}
	public void setNif(String nif) {
		this.nif = nif;
	}
	public float getPrecio() {
		return precio;
	}
	public void setPrecio(int precio) {
		this.precio = precio;
	}
	public String getRutaPdf() {
		return rutaPdf;
	}
	public void setRutaPdf(String rutaPdf) {
		this.rutaPdf = rutaPdf;
	}
	public String getOpciones() {
		return opciones;
	}
	public void setOpciones(String opciones) {
		this.opciones = opciones;
	}
}
