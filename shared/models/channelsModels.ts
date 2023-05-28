export  type Workspace = {
    name: string;
    label: string;
    id: string;
    icon: "globe" | "frontend" | "backend";
  };


export const workspaceList: Array<Workspace> = [
    {
      id: "1",
      name: "global",
      label: "global channel",
      icon: "globe",
    },
    {
      id: "2",
      name: "frontend",
      label: "frontend channel",
      icon: "frontend",
    },
    {
      id: "3",
      name: "backend",
      label: "backend channel",
      icon: "backend",
    },
  ];