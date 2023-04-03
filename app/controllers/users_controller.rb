class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  # def show
  #   @users = User.find_by(id: params[:id])
  #   if @users
  #   render json: @users, status: :ok
  #   else
  #     render json: {error: "User not found"}, status: :not_found
  #   end
  # end
  def show
    @users = User.find_by(
      id: params[:id],
      email: params[:email],
      password: params[:password]
      )
      render json: @users, status: :ok
  end

  # POST /users
  def create
    @user = User.create!(user_params)

    if @user
      render json: @user, status: :created
    else
      render json: {error: "User not created"}
    end
  end

  # PATCH/PUT /users/1
  def update
    @user = User.find_by(id: params[:id])
    if @user
      @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: {error: "User not updated"}
    end
  end

  # DELETE /users/1
  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :email, :password, :age)
    end
end
