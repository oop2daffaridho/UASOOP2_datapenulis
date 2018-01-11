package daffa5c.datapenulis.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import daffa5c.datapenulis.entity.Penulis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import daffa5c.datapenulis.repo.PenulisRepo;


@RestController
public class ApiController {

	@RequestMapping("/get-nama")
	public Map<String, Object> getNama(){
		Map<String, Object> result = new HashMap();
		result.put("nama", "Dio");

		return result;
	}
        @Autowired
        private PenulisRepo penulisRepo;

	//-- aplikasi mahasiswa 
	@RequestMapping("/daftar-penulis")
        public List<Penulis> ambilDaftarPenulis(){
            return penulisRepo.findAll();
        }

    @RequestMapping(value = "/tambah-pnls", method = RequestMethod.POST)
    public void tambahData(@RequestBody Penulis pnls){
    	//System.out.println("nim : " + mhs.getNim());
    	//System.out.println("nama : " + mhs.getNama());
    	//System.out.println("jurusan : " + mhs.getJurusan());
    	penulisRepo.save(pnls);
    }

    @RequestMapping("/get-pnls-by-id/{id}")
    public Penulis getPnlsById(@PathVariable("id") String id) {
    	return penulisRepo.findOneById(id);
    }

    @RequestMapping(value = "/hapus-data/{id}", method = RequestMethod.DELETE)
    public void hapusData(@PathVariable("id") String id){
        penulisRepo.delete(id);
    }


    @RequestMapping("/keluar")
    public void keluar(HttpServletRequest req, 
        HttpServletResponse resp) {
        Authentication auth = SecurityContextHolder
            .getContext().getAuthentication();
        new SecurityContextLogoutHandler()
            .logout(req, resp, auth);
    }


}