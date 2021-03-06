import {Controller, Post} from "@tsed/common";
import {Returns} from "@tsed/schema";
import {Pagination} from "../models/Pagination";
import {Product} from "../models/Product";

@Controller("/")
class MyController {
  @Post("/")
  @Returns(200, Pagination).Of(Product).Description("description")
  async method(): Promise<Pagination<Product> | null> {
    return null;
  }
}