import { DataType, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  roleId: "0" | "1" | "2";
  status: "0" | "1";
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare roleId: "0" | "1" | "2";
  declare status: "0" | "1";
  declare createdAt?: Date | undefined;
  declare updatedAt?: Date | undefined;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: false,
      defaultValue: "0",
    },
    status: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
      defaultValue: "1",
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);
