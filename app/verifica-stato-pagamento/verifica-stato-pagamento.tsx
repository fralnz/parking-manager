import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://eucgcytepwjzmnlgpuqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Y2djeXRlcHdqem1ubGdwdXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MTg1MDgsImV4cCI6MjAzNDI5NDUwOH0.bdOvP5iYu_bVc2uSfAPPLItj2tb4rgjnupUi8Jflsws";
const supabase = createClient(supabaseUrl, supabaseKey);

const VerificaPagamento = () => {
  const [matricola, matricola_set] = useState<string | null>(null);
  const [password, password_set] = useState<string | null>(null);
  const [checkUser, checkUser_set] = useState<boolean | null>(null);

  const showAlertLogin = ()=>{
    if(checkUser === false){
      return(
        <div>Matricola o Password Errati</div>
      )
    }
  }


  const onInputMatricola = (e) => {
    matricola_set(e.target.value);
  };

  const onInputPassword = (e) => {
    password_set(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkLogin();
  };
  //pwd supabase:localhost1234!

  const checkLogin = async () => {
    let { data: Forze_Ordine, error } = await supabase
      .from("Forze_Ordine")
      .select("id")
      .eq("matricola", matricola)
      .eq("password", password);

    if (Forze_Ordine.length > 0) {
      checkUser_set(true);
    }else{
      checkUser_set(false);
    }

    console.log("Forze_ordine", Forze_Ordine);
    console.log("error", error);
  };

  return (
    <>
      <section>
        {showAlertLogin()}
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            placeholder="Matricola"
            onInput={(e) => onInputMatricola(e)}
          />
          <input
            type="text"
            placeholder="Password"
            onInput={(e) => onInputPassword(e)}
          />
          <button>Accedi</button>
        </form>
      </section>
    </>
  );
};

export default VerificaPagamento;
