import { useSelector, useDispatch } from "react-redux";
import { AppStateType, AppDispatchType } from "../../store/store";

export const useStore = () => {
  const store = useSelector((store: AppStateType) => store);
  const dispatch = useDispatch<AppDispatchType>();

  return { store, dispatch };
};
