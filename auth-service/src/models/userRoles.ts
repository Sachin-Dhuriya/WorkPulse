import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface UserRolesAttributes {
  id: number;
  roleId: number;
  roleName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserRolesCreationAttributes extends Optional<
  UserRolesAttributes,
  "id" | "createdAt" | "updatedAt"
> {}

export class UserRoles
  extends Model<UserRolesAttributes, UserRolesCreationAttributes>
  implements UserRolesAttributes
{
  declare id: number;
  declare roleId: number;
  declare roleName: string;
  declare createdAt?: Date | undefined;
  declare updatedAt?: Date | undefined;
}

UserRoles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "userRoles",
    timestamps: true,
  },
);
