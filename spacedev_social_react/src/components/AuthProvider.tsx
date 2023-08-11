import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { userStorage } from "../utils/createStorage";
import { Modal } from "../utils/Modal";

export interface LoginForm {
  username: string;
  password: string;
}

export interface AuthProviderProps {
  user: {
    name: string;
  } | null;
  login: (form: LoginForm) => void;
  logout: () => void;
}

const Context = createContext({} as AuthProviderProps);
export const AuthProvider: FC<{ children: any }> = (props) => {
  const [user, setUser] = useState<AuthProviderProps["user"]>(userStorage.get);

  useEffect(() => {
    userStorage.set(user);
  }, [user]);

  const login = useCallback<AuthProviderProps["login"]>((form) => {
    setUser({
      name: "Đặng Thuyền Vương",
    });
  }, []);

  const logout = useCallback<AuthProviderProps["logout"]>(() => {
    Modal.confirm({
      title: "Bạn có muốn đăng xuất khỏi tài khoản?",
      onOk: () => {
        setUser(null);
      },
    });
  }, []);

  const value = useMemo<AuthProviderProps>(() => {
    return {
      user,
      login,
      logout,
    };
  }, [user, login, logout]);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);
