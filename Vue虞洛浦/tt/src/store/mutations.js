export default {
  SHOW_LOADING:(state,payload)=>{
    state.bLoading=true;
  },
  HIDE_LOADING:(state,payload)=>{
    state.bLoading=false;
  },
  SHOW_NAV:(state,payload)=>{
    state.bNav=true;
  },
  HIDE_NAV:(state,payload)=>{
    state.bNav=false;
  },
  SHOW_FOOT:(state,payload)=>{
    state.bFoot=true;
  },
  HIDE_FOOT:(state,payload)=>{
    state.bFoot=false;
  },
  CuserData:(state,payload)=>{
    state.userData=payload;
  },
  SuserData:(state,payload)=>{
    state.userData="";
  },
  Cindex:(state,payload)=>{
    state.index=payload;
  },
  Cnews:(state,payload)=>{
    state.news=payload;
  }
}