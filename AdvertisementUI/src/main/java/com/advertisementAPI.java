package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.Adverticement;

/**
 * Servlet implementation class advertisementAPI
 */
@WebServlet("/advertisementAPI")
public class advertisementAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Adverticement AddverticementObject = new Adverticement();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public advertisementAPI() {
        super();
           
    }


	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
	}

	/**
	 * @return 
	 * @return 
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
		String output = AddverticementObject.insertAdverticement(request.getParameter("Add_type"),
				 request.getParameter("Add_Title"),
				 request.getParameter("Add_Desc"),
				 request.getParameter("Add_Img"), (byte) 0);
				response.getWriter().write(output);
		
	}
	private static Map getParasMap1(HttpServletRequest request1)
		{
		 Map<String, String> map = new HashMap<String, String>();
		try
		 {
		 Scanner scanner = new Scanner(request1.getInputStream(), "UTF-8");
		 String queryString = scanner.hasNext() ?
		 scanner.useDelimiter("\\A").next() : "";
		 scanner.close();
		 String[] params = queryString.split("&");
		 for (String param : params)
		 {
		
			 String[] p = param.split("=");
			 map.put(p[0], p[1]);
			 }
			 }
			catch (Exception e)
			 {
			 }
			return map;
			}
	

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras = getParasMap1(request);
		
		 String output = AddverticementObject.updateAdverticement(paras.get("hidAddIDSave").toString(),
				 paras.get("Add_ID").toString(),
				 paras.get("Add_Type").toString(),
				 paras.get("Add_Title").toString());
			response.getWriter().write(output);
		}
	


	private Map getParasMap(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return null;
	}



	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap1(request);
		String output = AddverticementObject.deleteAdd(paras.get("Add_ID").toString());
		response.getWriter().write(output); 
	}

}
