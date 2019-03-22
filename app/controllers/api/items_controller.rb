class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:update, :destroy]

  def index
    render json: @department.items
  end

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: @item.errors, status:422
    end
  end

  def update
    if @item.update(item_params)
      render json: @item 
    else 
      render json: @item.errors, status:422
    end
  end

  def destroy
    @item.destroy 
    render json: { message: 'item Deleted' }
  end

  private
  def set_department
    @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
  
