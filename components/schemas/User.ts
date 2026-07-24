export class User {
  // Explicit property declarations
  public id: string;
  public email: string;
  private isActive: boolean;

  // Parameters with access modifiers (like private) are automatically created as fields
  constructor(
    id: string,
    email: string,
    private name: string,
    private role: string = "guest",
  ) {
    this.id = id;
    this.email = email;
    this.isActive = true; // Default initialization
  }

  // Public method to get a value
  public getProfileInfo(): string {
    return `${this.name} (${this.email}) - Role: ${this.role}`;
  }

  // Getter method for checked access
  public get accountStatus(): string {
    return this.isActive ? "Active" : "Deactivated";
  }

  // Setter method to add validation logic
  public set accountStatus(status: string) {
    this.isActive = status.toLowerCase() === "active";
  }
}
